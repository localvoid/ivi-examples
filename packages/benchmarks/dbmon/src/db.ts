/**
 * @final
 */
export class Query {
  elapsed: number;
  query: string;

  constructor(elapsed: number, query: string) {
    this.elapsed = elapsed;
    this.query = query;
  }

  static rand(): Query {
    const elapsed = Math.random() * 15;
    let query: string;

    if (Math.random() < 0.1) {
      query = "vacuum";
    } else if (Math.random() < 0.2) {
      query = "<IDLE> in transaction";
    } else {
      query = "SELECT blah FROM something";
    }

    return new Query(elapsed, query);
  }
}

const EMPTY_QUERY = new Query(0, "***");

/**
 * @final
 */
export class DB {
  id: number;
  name: string;
  queries: Query[] | null;

  constructor(name: string) {
    this.id = DB._nextId++;
    this.name = name;
    this.queries = null;

    this.update();
  }

  static _nextId = 0;

  update(): void {
    const queries = [] as Query[];

    const r = Math.floor((Math.random() * 10) + 1);
    for (let j = 0; j < r; j++) {
      queries.push(Query.rand());
    }

    this.queries = queries;
  }

  getTopFiveQueries(): Query[] {
    const qs = this.queries!.slice(0, 5);
    qs.sort(function (a, b) {
      return a.elapsed - b.elapsed;
    });
    while (qs.length < 5) {
      qs.push(EMPTY_QUERY);
    }
    return qs;
  }
}

/**
 * @final
 */
export class DBList {
  dbs: DB[];

  constructor(n: number) {
    this.dbs = [];

    for (let i = 0; i < n; i++) {
      this.dbs.push(new DB("cluster" + (i + 1)));
      this.dbs.push(new DB("cluster" + (i + 1) + " slave"));
    }
  }

  update(): void {
    const dbs = this.dbs;
    for (let i = 0; i < dbs.length; i++) {
      dbs[i] = new DB(dbs[i].name);
    }
  }

  randomUpdate(r: number): void {
    const dbs = this.dbs;
    for (let i = 0; i < dbs.length; i++) {
      if (Math.random() < r) {
        dbs[i] = new DB(dbs[i].name);
      }
    }
  }
}
