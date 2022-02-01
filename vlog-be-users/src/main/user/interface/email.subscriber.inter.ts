export interface EmailSubscriberInterface extends Document {
    userId: String;
    email: String;
    city: String;
    subscriptionType: String;
    status: Boolean;
}