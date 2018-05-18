import { Users } from "../../models/Test";

class UserMethod {
    create = async (user) => {
        return await Users.create(user);
    }
}

export default UserMethod;