import { createServer, Model, Factory } from "miragejs";
import { faker } from "@faker-js/faker";
import { LeadsGroup } from "./hooks/useGetLeads";
import { ILeadDetail } from "./hooks";
import { Response } from "miragejs";

const leadsGroupsStatusOptions = ["Processing", "Completed"] as const;
const leadsDetailStatusOptions = ["Valid", "Invalid"] as const;

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,

    factories: {
      leadsGroup: Factory.extend<Partial<LeadsGroup>>({
        id() {
          return faker.string.uuid();
        },
        name() {
          return `Campanha ${faker.company.name()}`;
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
          return faker.helpers.arrayElement(leadsGroupsStatusOptions);
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
      leadDetail: Factory.extend<Partial<ILeadDetail>>({
        id() {
          return faker.string.uuid();
        },
        email() {
          return faker.internet.email();
        },
        phone() {
          return faker.phone.number();
        },
        city() {
          return faker.location.city();
        },
        state() {
          return faker.location.state();
        },
        createdAt() {
          return faker.date.past();
        },
        status() {
          return faker.helpers.arrayElement(leadsDetailStatusOptions);
        },
      }),
    },

    models: {
      leadsGroup: Model.extend<Partial<LeadsGroup>>({}),
      leadDetail: Model.extend<Partial<ILeadDetail>>({}),
    },

    routes() {
      this.namespace = "api";

      this.get("/leadsGroup", (schema) => {
        return schema.all("leadsGroup").models;
      });

      this.get("/leadDetail/:id", (schema) => {
        return schema.all("leadDetail").models;
      });

      this.post("/leadReprocessing", () => {
        const randomNumber = Math.random();
        return randomNumber < 0.75 ? { sucess: true } : { sucess: false };
      });
    },

    seeds(server) {
      server.createList("leadsGroup", 1);
      server.createList("leadDetail", 9);
    },
  });
}
