export class FolderDTO {
    
    constructor(id, name, parentId) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.expanded = false;
    }
}
