"use server";

export async function generateCustomQRCode(data: string, customization: any) {
  try {
    const response = await fetch('YOUR_API_ENDPOINT/qr/custom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
        config: customization,
        size: 300,
        download: false,
        file: 'svg',
      }),
    });

    if (response.ok) {
      const qrCodeData = await response.text();
      return { success: true, data: qrCodeData };
    } else {
      console.error('Error generating custom QR code:', response.statusText);
      return { success: false, error: 'Failed to generate custom QR code' };
    }
  } catch (error) {
    console.error('Error generating custom QR code:', error);
    return { success: false, error: 'Failed to generate custom QR code' };
  }
}
