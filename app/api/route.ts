import data from './data.json'

export async function GET() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return new Response(JSON.stringify(data));
    } catch (error) {
        console.error('Error fetching data:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500
        });
    }
}