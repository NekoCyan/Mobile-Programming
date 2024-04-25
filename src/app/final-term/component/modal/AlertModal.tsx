import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type ModalProps = {
	title?: string;
	description?: string;
	onClose: () => void;
};

export default function AlertModal(props: Readonly<ModalProps>) {
	return (
		<View style={styles.centeredView}>
			<Modal transparent={true} onRequestClose={props.onClose}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalTitle}>
							{props.title || 'Alert'}
						</Text>
						<Text style={styles.modalDescription}>
							{props.description ?? 'No description'}
						</Text>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={props.onClose}
						>
							<Text style={styles.textStyle}>OK</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		display: 'flex',
		position: 'absolute',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 50,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 10,
		paddingLeft: 40,
		paddingRight: 40,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 10,
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalDescription: {
		marginBottom: 18,
		textAlign: 'center',
	},
});
