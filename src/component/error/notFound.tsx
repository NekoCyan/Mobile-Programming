import { Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';

export interface NotFoundProps {
	props: any;
}

export default function NotFound({ props }: Readonly<NotFoundProps>) {
	return (
		<View
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
            pt={'50%'}
		>
			<Text fontSize={'2xl'} textAlign={'center'} px={5}>
				The page / result you are looking for is not found.
			</Text>
			<TouchableOpacity onPress={() => props.navigation.goBack()}>
				<Text
					underline={true}
					textAlign={'center'}
					color='blue.500'
					fontSize={'3xl'}
					fontWeight={'bold'}
				>
					Back to Previous
				</Text>
			</TouchableOpacity>
		</View>
	);
}
