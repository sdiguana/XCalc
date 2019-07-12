export class VariableMap {
  constructor() {}
  private _map: Map<string, Set<string | number>> = new Map();
  private _valueVariables: Set<string> = new Set();

  private _addValues(
    key: string,
    value: string | number
  ): Set<string | number> {
    let vals: Set<string | number> = new Set();
    if (this._map.has(key)) {
      vals = this._map.get(key)!;
    }
    value = Number(value) ? Number(value) : value;
    vals.add(value);
    if (!Number(value)) this._valueVariables.add(value.toString());
    return vals;
  }

  private _add(key: string, value: string | number): void {
    if (Number(key) && Number(value)) return;
    else if (Number(key) && !Number(value)) {
      [key, value] = [value.toString(), Number(key)];
    }
    const values = this._addValues(key, value);
    this._map.set(key, values);
  }
  public add(a: string | number, b: string | number): void {
    this._add(a.toString(), b);
    this._add(b.toString(), a);
    // const aIsNumber = Number(a) ? true : false;
    // const bIsNumber = Number(b) ? true : false;
    // const aIsContained = this._map.has(a.toString());
    // const bIsContained = this._map.has(b.toString());
    // console.log(`add(${a}, ${b})`);
    // if (aIsNumber && bIsNumber) {
    //   return;
    // } else if (!aIsNumber && !bIsNumber) {
    //   //neither are numbers
    //   if (!aIsContained && !bIsContained) {
    //     this._add(a.toString(), b);
    //     this._add(b.toString(), a);
    //   } else if (aIsContained) {
    //     this._add(a.toString(), b);
    //   } else if (bIsContained) {
    //     this._add(b.toString(), a);
    //   }
    // } else {
    //   //one is a number
    //   const key = aIsNumber ? b.toString() : a.toString();
    //   const value = aIsNumber ? a : b;
    //   const kVals = this._map.has(key) ? this._map.get(key) : [];
    //   const valIsContained = kVals!.indexOf(value) != -1;
    //   //prevent duplicates:
    //   if (!valIsContained) {
    //     this._add(key, value);
    //   }
    // }
  }
  /** adds each member of second map into existing map. Returns Self. */
  public concat(map: VariableMap): VariableMap {
    for (const kv of map._map) {
      for (const val of kv[1]) {
        this.add(kv[0], val);
      }
    }
    return this;
  }

  /**Checks if a Keys & Values on match of the supplied key */
  public has(key: string): boolean {
    return this._map.has(key) || this._valueVariables.has(key);
  }
  /** Iterates over the map. Returns values from matching key as well as Keys+Values when matched in a Value[]*/
  public get(key: string): number | undefined {
    if (this._map.has(key)) {
      let set = this._map.get(key)!;
      for (const s of set) {
        if (Number(s)) return Number(s);
      }
    }
    return undefined;

    // let assignments: Array<string | number> = [];
    // for (const kv of this._map) {
    //   const vArr = kv[1];
    //   const k = kv[0];
    //   const i = vArr.indexOf(key);
    //   if (i != -1) {
    //     assignments!.push(k);
    //     assignments = assignments!.concat(vArr.splice(i, 1));
    //   } else if (k == key) {
    //     assignments = assignments!.concat(vArr.splice(i, 1));
    //   }
    // }
    // return assignments!;
  }
  // public getNumber(key: string): number | undefined {
  //   return this.get(key);
  //   // console.log(`getNumber(${key})`);
  //   // this.print();
  //   // let res = this._get(key);
  //   // this._map.entries;
  //   // console.log(res);
  //   // for (const r of res) {
  //   //   if (Number(r)) return Number(r);
  //   // }
  //   // let availableLinks: (string | number)[] = this._get(key);
  //   // const visited: (string | number)[] = [];

  //   // while (availableLinks.length > 0) {
  //   //   for (let i = availableLinks.length; i >= 0; i--) {
  //   //     let link = availableLinks[i]; //.toString();
  //   //     if (!link) continue;
  //   //     availableLinks.splice(i, 1);
  //   //     if (visited.includes(link)) {
  //   //       continue;
  //   //     }
  //   //     visited.push(link);
  //   //     if (Number(link)) return Number(link);

  //   //     availableLinks = availableLinks.concat(this._get(link.toString()));
  //   //   }
  //   // }
  //   return undefined;
  // }
  public print(): any {
    let retVal = [];
    for (const m of this._map) {
      //console.log(m);
      let set = [];
      for (const s of m[1].values()) {
        set.push(s);
      }
      retVal.push(`[${m[0]} :: ${set.join(", ")}]`);
    }
    return retVal;
  }
}
