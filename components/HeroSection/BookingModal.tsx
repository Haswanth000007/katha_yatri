// components/BookingModal.tsx
import {
    Modal,
    Box,
    Typography,
    Button,
    Link,
    Divider,
    useTheme
} from '@mui/material';

interface BookingModalProps {
    open: boolean;
    onClose: () => void;
    contactDetails: {
        phone: string;
        email: string;
        whatsapp: string;
    };
}

export const BookingModal = ({ open, onClose, contactDetails }: BookingModalProps) => {
    const theme = useTheme();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90%', sm: '80%', md: '600px' },
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="booking-modal-title"
        >
            <Box sx={style}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
                    Booking Information
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'black' }}>
                    Please contact us using any of the following methods to complete your booking:
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500, minWidth: 80, color: 'black' }}>Phone:</Typography>
                        <Link href={`tel:${contactDetails.phone}`} sx={{ textDecoration: 'none' }}>
                            <Button variant="outlined" size="small">
                                {contactDetails.phone}
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500, minWidth: 80, color: 'black' }}>Email:</Typography>
                        <Link href={`mailto:${contactDetails.email}`} sx={{ textDecoration: 'none' }}>
                            <Button variant="outlined" size="small" >
                                {contactDetails.email}
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500, minWidth: 80, color: 'black' }}>WhatsApp:</Typography>
                        <Link
                            href={`https://wa.me/${contactDetails.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textDecoration: 'none' }}
                        >
                            <Button variant="outlined" size="small">
                                Chat on WhatsApp
                            </Button>
                        </Link>
                    </Box>
                </Box>

                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained"
                        onClick={onClose}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                            },
                        }}
                    >
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};