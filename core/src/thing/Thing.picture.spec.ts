import { blankNode, graph, sym } from "rdflib";
import { Thing } from "./Thing";

describe("Thing", function () {
  describe("picture", () => {
    it("is null if nothing is found in store", () => {
      const store = graph();
      const it = new Thing(
        "https://jane.doe.example/container/file.ttl#fragment",
        store,
      );
      expect(it.picture()).toBe(null);
    });

    it.each([
      "http://schema.org/image",
      "https://schema.org/image",
      "http://schema.org/logo",
      "https://schema.org/logo",
      "http://www.w3.org/2006/vcard/ns#hasPhoto",
      "http://www.w3.org/2006/vcard/ns#photo",
      "http://www.w3.org/2006/vcard/ns#hasLogo",
      "http://www.w3.org/2006/vcard/ns#logo",
      "http://xmlns.com/foaf/0.1/img",
      "http://xmlns.com/foaf/0.1/depiction",
      "http://xmlns.com/foaf/0.1/thumbnail",
    ])("returns the image url from predicate %s", (predicate: string) => {
      const store = graph();
      const uri = "https://jane.doe.example/container/file.ttl#fragment";
      store.add(
        sym(uri),
        sym(predicate),
        sym("https://jane.doe.example/container/pic.jpg"),
      );
      const it = new Thing(
        "https://jane.doe.example/container/file.ttl#fragment",
        store,
      );
      const result = it.picture();
      expect(result).toEqual({
        url: "https://jane.doe.example/container/pic.jpg",
      });
    });

    it.each([
      "https://www.w3.org/ns/activitystreams#icon",
      "https://www.w3.org/ns/activitystreams#image",
    ])(
      "returns the url of an activity streams image blank node linked via %s",
      (predicate: string) => {
        const store = graph();
        const subject = "https://jane.doe.example/container/file.ttl#fragment";
        const imageNode = blankNode();
        store.add(sym(subject), sym(predicate), imageNode);
        store.add(
          imageNode,
          sym("https://www.w3.org/ns/activitystreams#url"),
          sym("https://jane.doe.example/container/pic.jpg"),
        );
        const it = new Thing(
          "https://jane.doe.example/container/file.ttl#fragment",
          store,
        );
        expect(it.picture()).toEqual({
          url: "https://jane.doe.example/container/pic.jpg",
        });
      },
    );

    it.each([
      "https://www.w3.org/ns/activitystreams#icon",
      "https://www.w3.org/ns/activitystreams#image",
    ])(
      "returns the url of an activity streams image named node linked via %s",
      (predicate: string) => {
        const store = graph();
        const subject = "https://jane.doe.example/container/file.ttl#fragment";
        const imageNode = sym(
          "https://jane.doe.example/container/file.ttl#image",
        );
        store.add(sym(subject), sym(predicate), imageNode);
        store.add(
          imageNode,
          sym("https://www.w3.org/ns/activitystreams#url"),
          sym("https://jane.doe.example/container/pic.jpg"),
        );
        const it = new Thing(
          "https://jane.doe.example/container/file.ttl#fragment",
          store,
        );
        expect(it.picture()).toEqual({
          url: "https://jane.doe.example/container/pic.jpg",
        });
      },
    );
  });
});
