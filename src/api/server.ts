import { createServer, Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";
import { LeadsGroup } from "./hooks/useGetLeads";

const statusOptions = ["Processing", "Completed"] as const;

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,

    factories: {
      leadsGroup: Factory.extend<Partial<LeadsGroup>>({
        id() {
          return faker.string.uuid();
        },
        name() {
          return `Campanha ${faker.company.name()} ${faker.date.month()} ${faker.date
            .future()
            .getFullYear()}`;
        },
        source() {
          return faker.helpers.arrayElement([
            "Facebook",
            "Google Ads",
            "LinkedIn",
          ]);
        },
        totalLeads() {
          return faker.number.int({ min: 100, max: 1000 });
        },
        invalidLeads() {
          return faker.number.int({ min: 1, max: 100 });
        },
        createdAt() {
          return faker.date.past();
        },
        updatedAt() {
          return faker.date.recent();
        },
        status() {
          return faker.helpers.arrayElement(statusOptions);
        },
        issueSummary() {
          const issues = [
            "E-mails Inválidos",
            "Números Inválidos",
            "Endereços Inválidos",
            "Dados Duplicados",
          ];
          return faker.helpers
            .arrayElements(issues, faker.number.int({ min: 1, max: 3 }))
            .join(", ");
        },
      }),
    },

    models: {
      leadsGroup: Model.extend<Partial<LeadsGroup>>({}),
    },

    routes() {
      this.namespace = "api";

      this.get("/leadsGroup", (schema) => {
        return schema.all("leadsGroup").models;
      });
    },

    seeds(server) {
      server.createList("leadsGroup", 20);
    },
  });
}
