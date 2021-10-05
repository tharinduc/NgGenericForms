export class BaseModel {
    constructor(props: object) {
        for (const key in props) {
            if (Object.prototype.hasOwnProperty.call(props, key)) {
                this[key] = props[key];
            }
        }
    }
}
