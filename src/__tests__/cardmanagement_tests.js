

import {addCard, editCard, removeCard} from '../utils/cardmanagement';



test("add card to empty list", () => {

    const cards = []
    const newCard = {
        name: "test",
        description: "test card",
        status: "ready",
        dueDate: "2020-12-12",
    }

    const newList = addCard(cards, newCard);

    expect(newList.length).toBe(1);
    expect(newList[0].name).toBe("test");
    expect(newList[0].description).toBe("test card");
    expect(newList[0].status).toBe("ready");
    expect(newList[0].dueDate).toBe("2020-12-12");
    expect(newList[0].id).toBeDefined();

});


test("add card to list that already contains items", () => {

    const cards = [
        {
            id: "20",
            name: "test",
            description: "test card",
            status: "completed",
            dueDate: "2020-12-12",
        },
        {
            id: "5",
            name: "test 2",
            description: "2nd test card",
            status: "inprogress",
            dueDate: "1999-01-01",
        }
    ]
    const newCard = {
        name: "new card",
        description: "new card to add",
        status: "ready",
        dueDate: "2020-02-02",
    }

    const newList = addCard(cards, newCard);

    expect(newList.length).toBe(3);

    expect(newList[0].name).toBe("test");
    expect(newList[0].description).toBe("test card");
    expect(newList[0].status).toBe("completed");
    expect(newList[0].dueDate).toBe("2020-12-12");
    expect(newList[0].id).toBe("20");

    expect(newList[1].name).toBe("test 2");
    expect(newList[1].description).toBe("2nd test card");
    expect(newList[1].status).toBe("inprogress");
    expect(newList[1].dueDate).toBe("1999-01-01");
    expect(newList[1].id).toBe("5");

    expect(newList[2].name).toBe("new card");
    expect(newList[2].description).toBe("new card to add");
    expect(newList[2].status).toBe("ready");
    expect(newList[2].dueDate).toBe("2020-02-02");
    expect(newList[2].id).toBeDefined();

});


