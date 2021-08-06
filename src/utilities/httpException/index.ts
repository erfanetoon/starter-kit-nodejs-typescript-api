type ConstructorType = {
    status: number;
    message: string;
    data?: any;
};

class HttpException extends Error {
    status: Number;
    message: string;
    data?: any;

    constructor({ status, message, data }: ConstructorType) {
        super(message);
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

export default HttpException;
