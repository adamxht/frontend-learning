interface Props {
    color?: 'primary' | 'secondary' | 'danger'; // limit to one of these values
    children: React.ReactNode;
    onClick: () => void;
}

const AdamButton = ({color="primary", children, onClick}: Props) => {
    return <button type="button" className={"btn btn-"+color} onClick={onClick}>{children}</button>
}

export default AdamButton;