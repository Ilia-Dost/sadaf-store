import StatsSection from "./informaion/StatsSection";
export default function FeaturedProducts() {
    return (
        <div>
            <div className="w-full bg-slate-50 h-[550px] md:h-[380px] border border-slate-200 rounded-xl shadow-2xl dark:bg-slate-900 dark:border-slate-500 dark:shadow-[0_8px_30px_rgba(255,255,255,0.25)]" >
                <div className="w-full h-[150px] flex items-center justify-center md:h-[200px]  ">
                    <div className="w-[80%] h-[100px] flex items-center justify-center md:border md:border-slate-50 md:bg-white md:rounded-full md:shadow-2xl">
                        <p className="text-black text-[15px] md:text-xl leading-6 mr-2 md:mr-5 dark:text-black">
                            صدف | مرجع تخصصی اتصالات صنعتی
                            تأمین‌کننده محصولات با استانداردهای جهانی برای صنایع نفت، گاز، پتروشیمی و آب.
                            کیفیتی که به آن اعتماد دارید.
                        </p>
                    </div>
                </div>
                <div className="w-full h-[250px]">
                    <StatsSection></StatsSection>
                </div>
            </div>
        </div>
    );
}