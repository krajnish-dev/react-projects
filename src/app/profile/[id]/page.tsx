export default function UserProfile({ params }: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
                <h1 className="text-3xl font-bold mb-4">User Profile</h1>
                <hr className="mb-4" />
                <p className="text-xl mb-2">Welcome to the profile page of:</p>
                <p className="text-4xl font-semibold text-orange-500">{params.id}</p>
            </div>
        </div>
    );
}