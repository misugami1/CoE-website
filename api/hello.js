export default function handler(request, response) {
  response.status(200).json({ message: "Success! Your Vercel API is working." });
}