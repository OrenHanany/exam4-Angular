export const createaccount = `CREATE TABLE IF NOT EXISTS bankaccounts.accountoperations (
  id INT NOT NULL AUTO_INCREMENT,
  accountnumber VARCHAR(45) NULL,
  type VARCHAR(45) NULL,
  sum INT NULL,
  date DATETIME NULL,
  interest INT NULL,
  payments INT NULL,
  PRIMARY KEY (id))`;
export const createuser = `CREATE TABLE IF NOT EXISTS bankaccounts.useraccount (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  lastname VARCHAR(45) NULL,
  PRIMARY KEY (id))`;

