import { component, List, type VAny } from "ivi";
import { createRoot, updateRoot } from "ivi/root";
import { htm } from "@ivi/tpl";

const tableCellId = (_: any, index: number) => index;
const tableRowId = (row: TableItemState) => row.id;
const animId = (item: AnimBoxState) => item.id;
const treeNodeId = (node: TreeNodeState) => node.id;

const TableCell = component(() => {
  const click = () => {
    console.log("click");
  };
  return (t: string) => htm`
    td.TableCell
      @click=${click}
      =${t}
  `;
});

const TableRow = component(() => (state: TableItemState) => {
  var id = state.id;

  return htm`
    tr${state.active ? "TableRow active" : "TableRow"}
      :data-id=${id}
      ${TableCell("#" + id)}
      ${List(state.props, tableCellId, TableCell)}
  `;
});

const Table = component(
  () => (state: TableState) =>
    htm`
    table.Table
      tbody
        ${List(state.items, tableRowId, TableRow)}
  `
);

const AnimBox = component(() => (state: AnimBoxState) => {
  const time = state.time % 10;
  return htm`
    div.AnimBox
      :data-id=${state.id}
      ~background=${"rgba(0,0,0," + (0.5 + time / 10) + ")"}
      ~border-radius=${time + "px"}
  `;
});

const Anim = component(
  () => (state: AnimState) =>
    htm`div.Anim ${List(state.items, animId, AnimBox)}`
);

const TreeLeaf = component(
  () => (state: TreeNodeState) => htm`li.TreeLeaf =${state.id}`
);

const subtree = (state: TreeNodeState): VAny =>
  state.container === true ? TreeNode(state) : TreeLeaf(state);

const TreeNode = component(
  () => (state: TreeNodeState) =>
    htm`ul.TreeNode ${List(state.children, treeNodeId, subtree)}`
);

const Tree = component(
  () => (root: TreeNodeState) => htm`div.Tree ${TreeNode(root)}`
);

function Main(state: AppState) {
  var location = state.location;
  return htm`
    div.Main
      ${
        location === "table"
          ? Table(state.table)
          : location === "anim"
          ? Anim(state.anim)
          : location === "tree"
          ? Tree(state.tree.root)
          : null
      }
  `;
}

uibench.init("ivi", "2.0.0");

document.addEventListener("DOMContentLoaded", () => {
  var container = document.getElementById("App")!;
  var root = createRoot(container, null);
  updateRoot(root, null);

  uibench.run(
    (next) => {
      updateRoot(root, Main(next));
    },
    (samples) => {
      container.innerHTML = `<pre>${JSON.stringify(samples, void 0, 2)}</pre>`;
    }
  );
});
