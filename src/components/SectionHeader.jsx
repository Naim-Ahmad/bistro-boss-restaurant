
export default function SectionHeader({subTitle, title}) {

    return (
        <div className="w-1/4 mx-auto my-10 text-center">
            <p className="mb-2 text-[#D99904]">{subTitle}</p>
            <h2 className="text-3xl border-y-4 font-normal uppercase py-2">{title}</h2>
        </div>
    )
}