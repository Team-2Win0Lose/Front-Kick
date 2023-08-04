import { rest } from "msw";
import people from "./dummy.json";

export const handlers = [
    rest.get("/api/user/auth", async (req, res, ctx) => {
        await sleep(200);

        return res(ctx.status(200), ctx.json(people));
    }),
    rest.post("/api/user/auth", async (req, res, ctx) => {
        await sleep(200);
        people.push({
            email:'seunghun311@naver.com',
            password:'12324'
        });

        return res(ctx.status(201), ctx.json(people));
    }),
];

async function sleep(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}