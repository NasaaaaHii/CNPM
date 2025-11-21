import axiosClient from "@/lib/axiosClient";

export interface User {
    user_id: number;
    type_user_id: number;
    name: string;
    phone_number: string;
    email: string;
    user_name: string;
    type_account_id: number;
    password: string;
    account_staus: string;
    type_user_name: string;
}

export const userService = {
    getUsers: async () => {
        const res = await axiosClient.get<{ ok: boolean; data: User[] }>(
            "http://localhost:5000/api/users"
        );
        return res.data.data;
    },

    updateUser: async (id: number, updateData: Partial<{ name: string; phone_number: string; email: string; }>) => {
        return axiosClient.put<User>(`api/users/${id}`, updateData);
    }
}