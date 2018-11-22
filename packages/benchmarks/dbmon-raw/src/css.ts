export function queryClassName(elapsed: number): string {
  if (elapsed > 0) {
    if (elapsed >= 10.0) {
      return "Query elapsed warn_long";
    } else if (elapsed >= 1.0) {
      return "Query elapsed warn";
    }
    return "Query elapsed short";
  }
  return "";
}

export function countClassName(count: number): string {
  if (count >= 20) {
    return "label label-important";
  } else if (count >= 10) {
    return "label label-warning";
  }
  return "label label-success";
}
