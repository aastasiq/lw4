import { Box } from '@mui/material'

export default function Title() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "20px",
				marginBottom: "50px"
			}}
		>
			<h1>Encryptor</h1>
			<h2>Шифрування повідомлень шифром AES</h2>
			<h3>Довжина ключа 256 bit</h3>
		</Box>
	)
}
