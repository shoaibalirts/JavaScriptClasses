import Human from "./Human.js";
export default class Teacher extends Human {
  constructor(name, id, designation, extraJob, sex) {
    super(name, id, designation, extraJob, sex);
  }
  primaryJob() {
    return "teaching";
  }
}
