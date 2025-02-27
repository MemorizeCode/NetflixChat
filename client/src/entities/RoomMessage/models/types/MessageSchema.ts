export interface MessageSchema {
    isLoading: boolean;
    data: MessageDataSchema[];
    roomId: string;
}

export interface MessageDataSchema {
    id: number;
    name: string;
    title: string;
    roomId: string;
}