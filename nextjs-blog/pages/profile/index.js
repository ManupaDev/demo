import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <h1>John Doe</h1>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="John Doe"
      />
    </div>
  );
}
