import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Button, Container, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { encryptFieldStyle } from "@/styles/encryptField.style";
const AesEncryption = require('aes-encryption')

const aes = new AesEncryption()


aes.setSecretKey('A3F0D9C4B7E2A8D3F0D9C4B7E2A8D3F0D9C4B7E2A8D3F0D9C4B7E2A8D3F0D9C4');

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [encrypted, setEncrypted] = useState();
  const [encryptFieldText, setEncryptFieldText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [error, setError] = useState(false);

  const handleText = (event) => {
    const newValue = event.target.value;
    if (newValue.length <= 150) { // Adjust limit as needed
      setEncryptFieldText(newValue);
      setError(false);
    } else {
      setError(true); // Set error state for exceeding limit
    }
  };
  const handleEncrypt = () => {
    if(isDecrypted) {
      setIsDecrypted(!isDecrypted)
    }
    setEncrypted(aes.encrypt(encryptFieldText))
    setError(false)
  }
  const handleDecrypt = () => {
    setIsDecrypted(!isDecrypted)
    setEncrypted(aes.decrypt(encrypted))
    setError(false)
  }

  const handleClear = () => {
    setEncrypted('');
    setEncryptFieldText('');
    setError(false)
  }

  return (
    <>
      <Head>
        <title>Encryptor</title>
        <meta name="description" content="the lab work - lw4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px"
          }}
        >
          <Box>
            <TextField
              id="outlined-multiline-static"
              label={encryptFieldText ? `Encryption for ${encryptFieldText.length} symbols` : "Encryption"}
              multiline
              rows={4}
              onChange={handleText}
              sx={encryptFieldStyle}
              value={encryptFieldText}
              title="Please write down just 150 symbols."
              error={error} // Set error prop for visual indication (optional)
              helperText={error ? 'Maximum 150 characters allowed' : ''}
            />
            <Button 
              color="secondary"
              onClick={handleEncrypt}
              disabled={!encryptFieldText}
            >
              Encrypt
            </Button>
          </Box>
          <Box>
            <Paper
              elevation={3}
              sx={{
                width: "300px",
                height: "300px",
                marginLeft: "5px",
                backgroundColor: "#0f0d1c",
                color: "white",
                borderRadius: "4px",
                border: "1px solid white",
                overflowWrap: "break-word",
                padding: "10px"
              }}
            >
              {encrypted}
            </Paper>
            <Box>
                <Button 
                color="secondary"
                onClick={handleDecrypt}
                disabled={!encrypted || isDecrypted}
                >
                  Decrypt
                </Button>
                <Button 
                color="secondary"
                onClick={handleClear}
                >
                  Clear
                </Button>
              </Box>
          </Box>
        
        </Container>
     
      </main>
    </>
  );
}
