/**
 * Mock data for virtual list demo
 */
export const mockData = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    description: `This is a description for item ${index + 1}. It contains some sample text to demonstrate the virtual list functionality.`
}));
