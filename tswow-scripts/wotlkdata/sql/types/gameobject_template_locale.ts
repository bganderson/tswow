/*
  * Copyright (C) 2020 tswow <https://github.com/tswow/>
  * This program is free software: you can redistribute it and/or
  * modify it under the terms of the GNU General Public License as
  * published by the Free Software Foundation, version 3.
  *
  * This program is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  * See the GNU General Public License for more details.
  *
  * You should have received a copy of the GNU General Public License
  * along with this program. If not, see <https://www.gnu.org/licenses/>.
  */

/* tslint:disable */
import { mediumint, smallint, text, varchar } from '../../primitives'
import { Relation } from '../../query/Relations'
import { PrimaryKey } from '../../table/PrimaryKey'
import { SQLCell, SQLCellReadOnly } from '../SQLCell'
import { SqlRow } from '../SQLRow'
import { SqlTable } from '../SQLTable'

 /**
  * Main row definition
  * - Add column comments to the commented getters below
  * - Add file comments to DBCFiles.ts
  */
export class gameobject_template_localeRow extends SqlRow<gameobject_template_localeCreator,gameobject_template_localeQuery> {
    /**
     * Primary Key
     *
     * No comment (yet!)
     */
    @PrimaryKey()
    get entry() {return new SQLCellReadOnly<mediumint, this>(this, 'entry')}

    /**
     * Primary Key
     *
     * No comment (yet!)
     */
    @PrimaryKey()
    get locale() {return new SQLCellReadOnly<varchar, this>(this, 'locale')}

    /**
     * No comment (yet!)
     */
    get name() {return new SQLCell<text, this>(this, 'name')}

    /**
     * No comment (yet!)
     */
    get castBarCaption() {return new SQLCell<text, this>(this, 'castBarCaption')}

    /**
     * No comment (yet!)
     */
    get VerifiedBuild() {return new SQLCell<smallint, this>(this, 'VerifiedBuild')}

    /**
     * Creates a clone of this row with new primary keys.
     *
     * Cloned rows are automatically added to the SQL table.
     */
    clone(entry : mediumint,locale : varchar, c? : gameobject_template_localeCreator) : this {
        return this.cloneInternal([entry,locale],c)
    }
}

/**
 * Used for object creation (Don't comment these)
 */
export type gameobject_template_localeCreator = {
    entry? : mediumint,
    locale? : varchar,
    name? : text,
    castBarCaption? : text,
    VerifiedBuild? : smallint,
}

/**
 * Used for object queries (Don't comment these)
 */
export type gameobject_template_localeQuery = {
    entry? : Relation<mediumint>,
    locale? : Relation<varchar>,
    name? : Relation<text>,
    castBarCaption? : Relation<text>,
    VerifiedBuild? : Relation<smallint>,
}

/**
 * Table definition (specifies arguments to 'add' function)
 * - Add file comments to SQLFiles.ts
 */
export class gameobject_template_localeTable extends SqlTable<
    gameobject_template_localeCreator,
    gameobject_template_localeQuery,
    gameobject_template_localeRow> {
    add(entry : mediumint,locale : varchar, c? : gameobject_template_localeCreator) : gameobject_template_localeRow {
        const first = this.first();
        if(first) return first.clone(entry,locale,c)
        else return this.rowCreator(this, {}).clone(entry,locale,c)
    }
}

/**
 * Table singleton (Object used by 'SQL' namespace)
 * - Add file comments to SQLFiles.ts
 */
export const SQL_gameobject_template_locale = new gameobject_template_localeTable(
    'gameobject_template_locale',
    (table, obj)=>new gameobject_template_localeRow(table, obj))