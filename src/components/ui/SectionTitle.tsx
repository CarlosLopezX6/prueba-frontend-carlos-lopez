
interface Props {
    title: string;
}
export const SectionTitle = ({ title }: Props) => {
    return (
        <h1 className="my-4 text-3xl font-bold">{ title }</h1>
    )
}
