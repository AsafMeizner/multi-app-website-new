'use server';

export async function editHttpRequest(data: any) {
    const response = await fetch('https://MA5951.pythonanywhere.com/update_image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
  
    if (response.ok) {
        return { success: true };
    } else {
        return { success: false, error: 'Failed to process the request' };
    }
}