const { actualPlaces, BuildPlainRegExpForPlace, BuildRegExpForSubPlace, BuildAllRegExpsForPlaces, ReturnFirstPlaceMatchingRegExp } = require("./content")

// * the tests
describe("BuildPlainRegExpForPlace", () => {
    it("builds a regex that matches a number with optional plus sign", () => {
        const place = { codes: ["1", "44"] };
        const regex = BuildPlainRegExpForPlace(place);

        expect(regex.test("+1415555")).toBe(true);
        expect(regex.test("441234567")).toBe(true);
    });

    it("matches only numbers starting with one of the provided codes", () => {
        const place = { codes: ["1", "44"] };
        const regex = BuildPlainRegExpForPlace(place);

        expect(regex.test("+331234567")).toBe(false);
        expect(regex.test("991234567")).toBe(false);
    });

    it("requires digits after the code", () => {
        const place = { codes: ["1", "44"] };
        const regex = BuildPlainRegExpForPlace(place);

        expect(regex.test("+44")).toBe(false);
        expect(regex.test("1")).toBe(false);
    });

    it("works with a single code", () => {
        const place = { codes: ["91"] };
        const regex = BuildPlainRegExpForPlace(place);

        expect(regex.test("+91123456789")).toBe(true);
        expect(regex.test("91123456789")).toBe(true);
        expect(regex.test("+44123456789")).toBe(false);
    });

    it("handles overlapping codes correctly", () => {
        const place = { codes: ["1", "12"] };
        const regex = BuildPlainRegExpForPlace(place);

        expect(regex.test("+12345")).toBe(true);
        expect(regex.test("12345")).toBe(true);
    });

    it("returns a RegExp instance", () => {
        const place = { codes: ["7"] };
        const regex = BuildPlainRegExpForPlace(place);

        expect(regex).toBeInstanceOf(RegExp);
    });
    it("matches Cyprus", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["357"] });
        expect(regex.test("+357123456")).toBe(true);
        expect(regex.test("357123456")).toBe(true);
        expect(regex.test("+356123456")).toBe(false);
    });

    it("matches Unassigned", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["210", "214", "215", "217", "219", "259", "28x", "292", "293", "294", "295", "296", "384", "388", "422", "424", "425", "426", "427", "428", "429", "671", "684", "693", "694", "695", "696", "697", "698", "699", "801", "802", "803", "804", "805", "806", "807", "809", "83x", "851", "854", "857", "858", "859", "871", "872", "873", "874", "875", "876", "877", "878", "879", "884", "885", "887", "888", "889", "89x", "969", "978", "990", "991", "999", "5995", "5998"] });
        expect(regex.test("+210123456")).toBe(true);
        expect(regex.test("5998123456")).toBe(true);
        expect(regex.test("+212123456")).toBe(false);
    });

    it("matches Uganda", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["256"] });
        expect(regex.test("+256123456")).toBe(true);
        expect(regex.test("256123456")).toBe(true);
        expect(regex.test("+255123456")).toBe(false);
    });

    it("matches Burundi", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["257"] });
        expect(regex.test("+257123456")).toBe(true);
        expect(regex.test("257123456")).toBe(true);
        expect(regex.test("+256123456")).toBe(false);
    });

    it("matches Mozambique", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["258"] });
        expect(regex.test("+258123456")).toBe(true);
        expect(regex.test("258123456")).toBe(true);
        expect(regex.test("+257123456")).toBe(false);
    });

    it("matches Zambia", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["260"] });
        expect(regex.test("+260123456")).toBe(true);
        expect(regex.test("260123456")).toBe(true);
        expect(regex.test("+261123456")).toBe(false);
    });

    it("matches Egypt", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["20"] });
        expect(regex.test("+20123456")).toBe(true);
        expect(regex.test("20123456")).toBe(true);
        expect(regex.test("+21123456")).toBe(false);
    });

    it("matches South Sudan", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["211"] });
        expect(regex.test("+211123456")).toBe(true);
        expect(regex.test("211123456")).toBe(true);
        expect(regex.test("+212123456")).toBe(false);
    });

    it("matches Morocco", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["212"] });
        expect(regex.test("+212123456")).toBe(true);
        expect(regex.test("212123456")).toBe(true);
        expect(regex.test("+213123456")).toBe(false);
    });

    it("matches Algeria", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["213"] });
        expect(regex.test("+213123456")).toBe(true);
        expect(regex.test("213123456")).toBe(true);
        expect(regex.test("+214123456")).toBe(false);
    });

    it("matches Tunisia", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["216"] });
        expect(regex.test("+216123456")).toBe(true);
        expect(regex.test("216123456")).toBe(true);
        expect(regex.test("+217123456")).toBe(false);
    });

    it("matches Libya", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["218"] });
        expect(regex.test("+218123456")).toBe(true);
        expect(regex.test("218123456")).toBe(true);
        expect(regex.test("+219123456")).toBe(false);
    });

    it("matches Gambia", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["220"] });
        expect(regex.test("+220123456")).toBe(true);
        expect(regex.test("220123456")).toBe(true);
        expect(regex.test("+221123456")).toBe(false);
    });

    it("matches Senegal", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["221"] });
        expect(regex.test("+221123456")).toBe(true);
        expect(regex.test("221123456")).toBe(true);
        expect(regex.test("+222123456")).toBe(false);
    });

    it("matches Mauritania", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["222"] });
        expect(regex.test("+222123456")).toBe(true);
        expect(regex.test("222123456")).toBe(true);
        expect(regex.test("+223123456")).toBe(false);
    });

    it("matches Mali", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["223"] });
        expect(regex.test("+223123456")).toBe(true);
        expect(regex.test("223123456")).toBe(true);
        expect(regex.test("+224123456")).toBe(false);
    });

    it("matches Guinea", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["224"] });
        expect(regex.test("+224123456")).toBe(true);
        expect(regex.test("224123456")).toBe(true);
        expect(regex.test("+225123456")).toBe(false);
    });

    it("matches Ivory Coast", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["225"] });
        expect(regex.test("+225123456")).toBe(true);
        expect(regex.test("225123456")).toBe(true);
        expect(regex.test("+226123456")).toBe(false);
    });

    it("matches Burkina Faso", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["226"] });
        expect(regex.test("+226123456")).toBe(true);
        expect(regex.test("226123456")).toBe(true);
        expect(regex.test("+227123456")).toBe(false);
    });

    it("matches Niger", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["227"] });
        expect(regex.test("+227123456")).toBe(true);
        expect(regex.test("227123456")).toBe(true);
        expect(regex.test("+228123456")).toBe(false);
    });

    it("matches Togo", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["228"] });
        expect(regex.test("+228123456")).toBe(true);
        expect(regex.test("228123456")).toBe(true);
        expect(regex.test("+229123456")).toBe(false);
    });

    it("matches Benin", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["229"] });
        expect(regex.test("+229123456")).toBe(true);
        expect(regex.test("229123456")).toBe(true);
        expect(regex.test("+230123456")).toBe(false);
    });

    it("matches Mauritius", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["230"] });
        expect(regex.test("+230123456")).toBe(true);
        expect(regex.test("230123456")).toBe(true);
        expect(regex.test("+231123456")).toBe(false);
    });

    it("matches Liberia", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["231"] });
        expect(regex.test("+231123456")).toBe(true);
        expect(regex.test("231123456")).toBe(true);
        expect(regex.test("+232123456")).toBe(false);
    });

    it("matches Sierra Leone", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["232"] });
        expect(regex.test("+232123456")).toBe(true);
        expect(regex.test("232123456")).toBe(true);
        expect(regex.test("+233123456")).toBe(false);
    });

    it("matches Ghana", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["233"] });
        expect(regex.test("+233123456")).toBe(true);
        expect(regex.test("233123456")).toBe(true);
        expect(regex.test("+234123456")).toBe(false);
    });

    it("matches Nigeria", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["234"] });
        expect(regex.test("+234123456")).toBe(true);
        expect(regex.test("234123456")).toBe(true);
        expect(regex.test("+235123456")).toBe(false);
    });

    it("matches Chad", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["235"] });
        expect(regex.test("+235123456")).toBe(true);
        expect(regex.test("235123456")).toBe(true);
        expect(regex.test("+236123456")).toBe(false);
    });

    it("matches Central African Republic", () => {
        const regex = BuildPlainRegExpForPlace({ codes: ["236"] });
        expect(regex.test("+236123456")).toBe(true);
        expect(regex.test("236123456")).toBe(true);
        expect(regex.test("+237123456")).toBe(false);
    });
});

describe("BuildRegExpForSubPlace", () => {
    const us = {
        placeName: "United States",
        codes: ["1"],
        subPlaces: [
            {
                name: "Alabama",
                codes: ["205", "251", "256", "334", "938"],
            },
            {
                name: "Alaska",
                codes: ["907"],
            },
        ],
    };

    const alabama = us.subPlaces[0];
    const alaska = us.subPlaces[1];

    test("returns a RegExp", () => {
        const re = BuildRegExpForSubPlace(us, alabama);
        expect(re).toBeInstanceOf(RegExp);
    });

    test("matches country code + subplace code + number", () => {
        const re = BuildRegExpForSubPlace(us, alabama);
        expect(re.test("12051234567")).toBe(true);
    });

    test("matches parentheses formatting", () => {
        const re = BuildRegExpForSubPlace(us, alabama);
        expect(re.test("+12051234567")).toBe(true);
    });

    test("does not match wrong subplace code", () => {
        const re = BuildRegExpForSubPlace(us, alabama);
        expect(re.test("+19071234567")).toBe(false);
    });

    test("matches another subplace", () => {
        const re = BuildRegExpForSubPlace(us, alaska);
        expect(re.test("+19071234567")).toBe(true);
        expect(re.test("+12051234567")).toBe(false);
    });

    test("matches Canada area codes under United States place", () => {
        const us = actualPlaces.find((p) => p.placeName === "United States");
        const canada = us.subPlaces.find((sp) => sp.name === "Canada");
        const re = BuildRegExpForSubPlace(us, canada);

        expect(re.test("+17801234567")).toBe(true);
        expect(re.test("14161234567")).toBe(true);
        expect(re.test("+16041234567")).toBe(true);
        expect(re.test("+12051234567")).toBe(false);
    });

    test("matches Netherlands Antilles subplace code", () => {
        const place = actualPlaces.find((p) => p.placeName === "Netherlands Antilles");
        const sintEustatius = place.subPlaces.find((sp) => sp.name === "Sint Eustatius");
        const re = BuildRegExpForSubPlace(place, sintEustatius);

        expect(re.test("+59931234567")).toBe(true);
        expect(re.test("59931234567")).toBe(true);
        expect(re.test("+59941234567")).toBe(false);
    });

    test("matches Tanzania Zanzibar subplace code", () => {
        const place = actualPlaces.find((p) => p.placeName === "Tanzania");
        const zanzibar = place.subPlaces.find((sp) => sp.name === "Zanzibar");
        const re = BuildRegExpForSubPlace(place, zanzibar);

        expect(re.test("+255241234567")).toBe(true);
        expect(re.test("255241234567")).toBe(true);
        expect(re.test("+255251234567")).toBe(false);
    });

    test("matches Finland Åland subplace code", () => {
        const place = actualPlaces.find((p) => p.placeName === "Finland");
        const aland = place.subPlaces.find((sp) => sp.name === "Åland");
        const re = BuildRegExpForSubPlace(place, aland);

        expect(re.test("+358181234567")).toBe(true);
        expect(re.test("358181234567")).toBe(true);
        expect(re.test("+358191234567")).toBe(false);
    });

    test("matches Pakistan Azad Kashmir subplace code", () => {
        const place = actualPlaces.find((p) => p.placeName === "Pakistan");
        const azadKashmir = place.subPlaces.find((sp) => sp.name === "Azad Kashmir");
        const re = BuildRegExpForSubPlace(place, azadKashmir);

        expect(re.test("+925821234567")).toBe(true);
        expect(re.test("925821234567")).toBe(true);
        expect(re.test("+925811234567")).toBe(false);
    });
});

describe("ReturnFirstPlaceMatchingRegExp", () => {

    regExpList = BuildAllRegExpsForPlaces(actualPlaces)

    actualPlaces.forEach((place) => {
        const placeName = place.placeName || place.name;

        // first test subcodes

        if (Array.isArray(place.subPlaces)) {
            place.subPlaces.forEach((subPlace) => {
                const subPlaceName = subPlace.name;
                place.codes.forEach((code) => {
                    subPlace.codes.forEach((subCode) => {
                        test(`matches subplace: ${placeName} -> ${subPlaceName} with code 00${code}${subCode} (leading 0s)`, () => {
                            const phone = `00${code}${subCode}1234567`;

                            const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                            expect(result).toBe(subPlaceName);
                        });
                        test(`matches subplace: ${placeName} -> ${subPlaceName} with code +${code}${subCode} (plus)`, () => {
                            const phone = `+${code}${subCode}1234567`;

                            const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                        expect(result).toBe(subPlaceName);
                        });
                        test(`matches subplace: ${placeName} -> ${subPlaceName} with code +${code}(${subCode}) (plus, subCode in parens))`, () => {
                            const phone = `+${code}${subCode}1234567`;

                            const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                            expect(result).toBe(subPlaceName);
                        });
                        test(`matches subplace: ${placeName} -> ${subPlaceName} with code +${code} ${subCode} (plus, subCode separated)`, () => {
                            const phone = `+${code} ${subCode} 1234567`;

                            const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                            expect(result).toBe(subPlaceName);
                        });
                        test(`matches subplace: ${placeName} -> ${subPlaceName} with code ${code} ${subCode} (no plus, subCode separated))`, () => {
                            const phone = `${code} ${subCode}1234567`;

                            const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                            expect(result).toBe(subPlaceName);
                        });
                        test(`matches subplace: ${placeName} -> ${subPlaceName} with code +${code} ${subCode} (plus, subCode separated and in parens)`, () => {
                            const phone = `+${code} (${subCode}) 1234567`;

                            const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                            expect(result).toBe(subPlaceName);
                        });
                        test(`matches subplace: ${placeName} -> ${subPlaceName} with code ${code} ${subCode} (no plus, subCode separated and in parens)))`, () => {
                            const phone = `${code} (${subCode}) 1234567`;

                            const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                            expect(result).toBe(subPlaceName);
                        });
                        test(`matches subplace: ${placeName} -> ${subPlaceName} with code ${code}${subCode} (no plus)`, () => {
                            const phone = `${code}${subCode}1234567`;

                            const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                            expect(result).toBe(subPlaceName);
                        });
                        test(`matches subplace: ${placeName} -> ${subPlaceName} with code ${code}${subCode} (no plus, subCode in parens)`, () => {
                            const phone = `${code}(${subCode})1234567`;

                            const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                            expect(result).toBe(subPlaceName);
                        });
                    });
                });
            });
            // plan code testing otherwise
        } else if (!Array.isArray(place.subPlaces)) {
            place.codes.forEach((code) => {
                test(`matches place: ${placeName} with code +${code} (plus)`, () => {
                    const phone = `+${code}1234567`; // 8+ digits total

                    const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                    expect(result).toBe(placeName);
                });
                test(`matches place: ${placeName} with code ${code} (no plus)`, () => {
                    const phone = `${code}1234567`; // 8+ digits total

                    const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                    expect(result).toBe(placeName);
                });
                test(`matches place: ${placeName} with code 00${code} (leading 0s)`, () => {
                    const phone = `00${code}1234567`; // 8+ digits total

                    const result = ReturnFirstPlaceMatchingRegExp(regExpList, phone);
                    expect(result).toBe(placeName);
                });
            });
        }
    });
});
