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
    const aStr = a.toString();
    const bStr = b.toString();
    this._add(aStr, b);
    this._add(bStr, a);
    let number = this.get(aStr) || this.get(bStr);
    if (number) {
      this._add(aStr, number);
      this._add(bStr, number);
      //propagate # through all equality references:
      [...new Set(this._getAll(aStr).concat(this._getAll(bStr)))]
        .filter(x => !Number(x))
        .forEach(x => {
          const sStr = x.toString();
          if (this.has(sStr)) {
            this._add(sStr, number!);
          }
        });
    }
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
        if (Number(s)) {
          return Number(s);
        }
      }
    }
    return undefined;
  }
  private _getAll(key: string): (string | number)[] {
    if (this._map.has(key)) {
      return [...this._map.get(key)!];
    }
    return [];
  }
  /** Returns contents of variable map in an array, format: [key :: val1, val2, ...] */
  public print(): string[] {
    const retVal: string[] = [];
    for (const m of this._map) {
      const set = [];
      for (const s of m[1].values()) {
        set.push(s);
      }
      retVal.push(`[${m[0]} :: ${set.join(", ")}]`);
    }
    return retVal;
  }
}
