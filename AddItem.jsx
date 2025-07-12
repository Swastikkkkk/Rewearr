import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage, auth } from '../../FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddItem = () => {
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [condition, setCondition] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const categories = ['Ethnic', 'Western', 'Kidswear', 'Accessories', 'Modern'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return setError('Please log in to post an item.');
    if (!image) return setError('Please upload an image.');

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const imageRef = ref(storage, `items/${user.uid}/${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'items'), {
        title,
        description,
        category,
        size,
        condition,
        tags: tags.split(',').map((t) => t.trim()),
        imageUrl,
        postedBy: user.uid,
        createdAt: serverTimestamp(),
      });

      setSuccess('Item listed successfully!');
      setTitle('');
      setDescription('');
      setCategory('');
      setSize('');
      setCondition('');
      setTags('');
      setImage(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 mt-10 shadow-xl rounded-2xl">
      <h2 className="text-3xl font-semibold text-[#1a3d35] mb-6 text-center">Add New Item</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Upload */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#447d68] p-4 rounded-xl h-64 bg-gray-50">
          <label className="text-center text-[#447d68] cursor-pointer">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="h-48 object-contain mx-auto"
              />
            ) : (
              <div className="text-sm">
                <p className="mb-1 font-medium">Click to upload image</p>
                <p className="text-xs text-gray-500">(Max size: 5MB)</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>

        {/* Text Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68] h-28"
            required
          />

          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#447d68]"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Size (e.g., M, L, XL)"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
            required
          />

          <input
            type="text"
            placeholder="Condition (e.g., New, Gently Used)"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
            required
          />

          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#447d68]"
          />

          {/* Feedback */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#447d68] text-white rounded-xl font-medium hover:bg-[#366755] transition"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Post Item'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
