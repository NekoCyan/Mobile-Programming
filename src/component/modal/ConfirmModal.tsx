import { View } from 'native-base';
import { Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ModalProps = {
	title?: string;
	description?: string;
	onCancel?: () => void;
	onConfirm?: () => void;
};

export default function ConfirmModal(props: Readonly<ModalProps>) {
	return (
		<View style={styles.centeredView}>
			<Modal transparent={true} onRequestClose={props.onCancel}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalTitle}>
							{props.title || 'Confirmation'}
						</Text>
						<Text style={styles.modalDescription}>
							{props.description ?? 'No description'}
						</Text>
						<View style={styles.buttonContainer}>
							<TouchableOpacity
								style={[styles.button, styles.buttonCancel]}
								onPress={props.onCancel}
							>
								<Text style={styles.textStyle}>Cancel</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[styles.button, styles.buttonYes]}
								onPress={props.onConfirm}
							>
								<Text style={styles.textStyle}>Confirm</Text>
							</TouchableOpacity>
						</View>
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
		zIndex: 20,
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
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 10,
	},
	button: {
		borderRadius: 10,
		padding: 10,
		paddingLeft: 20,
		paddingRight: 20,
		elevation: 2,
	},
	buttonYes: {
		backgroundColor: '#2196F3',
	},
	buttonCancel: {
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
		fontSize: 18,
		marginTop: 2,
		marginBottom: 20,
		textAlign: 'center',
	},
});
