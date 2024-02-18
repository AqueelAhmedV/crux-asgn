import { 
    Card,
    CardBody,
    // Typography,
    // Button,
    // CardFooter
} from '@material-tailwind/react'
import { WidgetContainerProps } from './commonTypes'

export function WidgetContainer({ children, dimension }: WidgetContainerProps) {

    const dimensionClasses = {
        smallSquare: ' w-48 h-48',
        horizontal: ' w-96 h-48',
        vertical: ' w-48 h-96',
        bigSquare: ' w-96 h-96'
    }

    return (
        <Card placeholder={''} className={"object-contain" + dimensionClasses[dimension]} >
            <CardBody placeholder={''} className='p-0 '>
                {children}
            </CardBody>
            {/* <CardFooter className="pt-0">
            <Button>Read More</Button>
            </CardFooter> */}
        </Card>
    )
}