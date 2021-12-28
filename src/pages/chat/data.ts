import { send } from "process";

type ChatType = {
    id: string;
    me: string;
    message: string;
    sendedAt: Date;
};



export const message: ChatType[] = [{ id: "기민수", me: "기민수", message: "안녕하세요", sendedAt: new Date() }];