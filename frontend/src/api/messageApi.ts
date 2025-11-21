import axiosClient from "@/lib/axiosClient";


export class MessageApi {
    static async getMessageByIdParent(idParent: number){
        const res = await axiosClient.get("/api/message", {
            params: { idParent: idParent }
        });
        return res.data;
    };
    
    static async sendMessageToAdminByIdParent(idParent: number, message: string){
        await axiosClient.post("/api/message/send", {
            idParentt: idParent,
            message: message
        });
    }
}