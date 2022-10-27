import { OpenAPI, PetsService } from "../sdk/dist";

OpenAPI.BASE = "http://localhost:4010";

const data = await PetsService.listPets(3243);

const preview = document.getElementById("preview");

if (preview) {
  preview.innerHTML = JSON.stringify(data, null, 2);
}
