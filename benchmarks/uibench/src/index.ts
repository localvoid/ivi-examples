import { createRoot, update, component, List, html, type VAny } from "ivi";

const tableCellId = (_: any, index: number) => index;
const tableRowId = (row: TableItemState) => row.id;
const animId = (item: AnimBoxState) => item.id;
const treeNodeId = (node: TreeNodeState) => node.id;

const TableCell = component(() => (t: string) => html`
  <td
    class="TableCell"
    @click=${() => { console.log("click"); }}
    .textContent=${t}
  />
`);

const TableRow = component(() => (state: TableItemState) => {
  const id = state.id;
  return html`
    <tr class=${state.active ? "TableRow active" : "TableRow"}
      data-id=${id}>
      ${TableCell("#" + id)}
      ${List(state.props, tableCellId, TableCell)}
    </tr>
  `;
});

const Table = component(() => (state: TableState) => html`
  <table class="Table">
    <tbody>${List(state.items, tableRowId, TableRow)}</tbody>
  </table>
`);

const AnimBox = component(() => (state: AnimBoxState) => {
  const time = state.time % 10;
  return html`
    <div class="AnimBox"
      data-id=${state.id}
      ~background=${"rgba(0,0,0," + (0.5 + time / 10) + ")"}
      ~border-radius=${time + "px"}
    />
  `;
});

const Anim = component(() => (state: AnimState) => html`<div class="Anim">${List(state.items, animId, AnimBox)}</div>`);

const TreeLeaf = component(() => (state: TreeNodeState) => html`<li class="TreeLeaf" .textContent=${state.id}/>`);
const subtree = (state: TreeNodeState): VAny => state.container === true ? TreeNode(state) : TreeLeaf(state);
const TreeNode = component(() => (state: TreeNodeState) => html`<ul class="TreeNode">${List(state.children, treeNodeId, subtree)}</ul>`);
const Tree = component(() => (root: TreeNodeState) => html`<div class="Tree">${TreeNode(root)}</div>`);

function Main(state: AppState) {
  var location = state.location;
  return html`
    <div class="Main">
      ${location === "table"
      ? Table(state.table)
      : location === "anim"
        ? Anim(state.anim)
        : location === "tree"
          ? Tree(state.tree.root)
          : null}
    </div>
  `;
}

uibench.init("ivi", "4.0.0");

document.addEventListener("DOMContentLoaded", () => {
  var container = document.getElementById("App")!;
  var root = createRoot(container, null);
  update(root, null);

  uibench.run(
    (next) => {
      update(root, Main(next));
    },
    (samples) => {
      container.innerHTML = `<pre>${JSON.stringify(samples, void 0, 2)}</pre>`;
    }
  );
});
