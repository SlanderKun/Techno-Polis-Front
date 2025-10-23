import React, {type ReactNode} from 'react';

interface IProps {
    title: string,
    children: ReactNode,
}

const ProfileSection:React.FC<IProps> = ({title, children}) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
};

export default ProfileSection;