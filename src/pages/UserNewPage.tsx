import { SectionTitle } from "../components/ui/SectionTitle";
import { GoBackButton } from "../components/ui/GoBackBtn";
import { UserForm } from "../components/users/UserForm";


const UserNewPage = () => {
    return (
        <div className="m-6">
            <SectionTitle title="Nuevo Usuario" />
            <GoBackButton goBackPath={'/users'}/>

            <UserForm />
        </div>
        
    )
}

export default UserNewPage;