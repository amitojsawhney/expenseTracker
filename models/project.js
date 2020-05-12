function project(name, id, total, client, payment, expense) {
  name = this.name;
  id = this.id;
  client = this.client;
  payment = this.payment;
  expense = this.expense;
  total = this.total;
}
run = project()
module.exports = {
  project: run
};