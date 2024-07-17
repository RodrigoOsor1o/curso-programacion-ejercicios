import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

console.log(data.overview)

const convertNumberToK = (number) =>{
    if (number >= 10000){
        number = number / 1000
        return `${number}k`
    }
    return number
}

export const OverviewContainer = () => {


    return(
        <section className='max-w-[1440px] flex flex-wrap absolute top-[191px] left-0 right-0 mx-auto'>
            {
                data.overview.map(object =>
                    <OverviewCard 
                        key={object.id}
                        user={object.user}   
                        audienceType={object.audienceType}
                        audience={convertNumberToK(object.audience)}
                        network={object.network}
                        isUp={object.isUp}
                        today={object.today}
                    /> 
                )
            }
        </section>
    )
}



export const OverviewTodayContainer  = () => {

    return (
        <section>
            <h2 className='text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-[32px]'>Overview Today</h2>
            <div className='flex flex-wrap'>
            {
                data ['overview-today'].map(object =>
                    <OverviewTodayCard 
                    key={convertNumberToK(object.id)}
                    network={convertNumberToK(object.network)}
                    statsType={convertNumberToK(object.statsType)}
                    stats={convertNumberToK(object.stats)}
                    porcentage={convertNumberToK(object.porcentage)}
                    isUp={convertNumberToK(object.isUp)}
                    />
                )
            }
        </div>
        </section>
        
    )
}
