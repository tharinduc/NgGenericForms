import { BaseModel } from '../models/BaseModel';
import { BaseService } from '../services/base.service';

export abstract class BaseFormComponent<T extends BaseModel> {
    constructor(protected service: BaseService<T>) {}

    submit(data: T) {
        console.log('submit data: ' + data);
        this.service.post(this.service.getPath(), data);
    }
}
