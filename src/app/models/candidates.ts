export interface Candidate {
    image: string;
    candidate: string;
    role: string;
    salary: number;
    last_comms: {
        unread: boolean;
        description: string;
        date_time: string;
    };
    sent_by: string;
    status: string;
    archived: boolean;
}
