import { TextField } from '@mui/material'
import React from 'react'

export default function EncryptField() {
  return (
    <TextField
			id="outlined-multiline-static"
			label="Multiline"
			multiline
			rows={4}
			defaultValue="Default Value"
    />
  )
}
