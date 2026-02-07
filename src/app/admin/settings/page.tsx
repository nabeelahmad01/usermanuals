'use client';

import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Save, Globe, Mail, Bell, Shield, Database, Palette } from 'lucide-react';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('general');
    const [settings, setSettings] = useState({
        siteName: 'ManualsHub',
        siteDescription: 'Your comprehensive resource for product manuals',
        contactEmail: 'support@manualshub.com',
        enableNotifications: true,
        enableAnalytics: true,
        maintenanceMode: false,
        primaryColor: '#2563eb',
        accentColor: '#06b6d4',
    });
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        // In production, save to database/API
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const tabs = [
        { id: 'general', label: 'General', icon: Globe },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'database', label: 'Database', icon: Database },
    ];

    return (
        <AdminLayout title="Settings" description="Configure your website settings">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Tabs */}
                <div className="lg:w-64 flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-sm p-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === tab.id
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                <span className="font-medium">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Settings Content */}
                <div className="flex-1">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        {/* General Settings */}
                        {activeTab === 'general' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h2>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Site Name
                                    </label>
                                    <input
                                        type="text"
                                        value={settings.siteName}
                                        onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Site Description
                                    </label>
                                    <textarea
                                        value={settings.siteDescription}
                                        onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contact Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            value={settings.contactEmail}
                                            onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Notifications Settings */}
                        {activeTab === 'notifications' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h2>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-gray-900">Email Notifications</h3>
                                        <p className="text-sm text-gray-500">Receive email alerts for new uploads</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={settings.enableNotifications}
                                            onChange={(e) => setSettings({ ...settings, enableNotifications: e.target.checked })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-gray-900">Analytics Tracking</h3>
                                        <p className="text-sm text-gray-500">Enable view and download tracking</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={settings.enableAnalytics}
                                            onChange={(e) => setSettings({ ...settings, enableAnalytics: e.target.checked })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Security Settings */}
                        {activeTab === 'security' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h2>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-gray-900">Maintenance Mode</h3>
                                        <p className="text-sm text-gray-500">Temporarily disable public access</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={settings.maintenanceMode}
                                            onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>

                                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <h3 className="font-medium text-yellow-800 mb-2">Change Admin Password</h3>
                                    <p className="text-sm text-yellow-700 mb-4">Update your password in the .env file for security</p>
                                    <code className="block bg-yellow-100 p-3 rounded text-sm text-yellow-900">
                                        ADMIN_PASSWORD=YourNewSecurePassword
                                    </code>
                                </div>
                            </div>
                        )}

                        {/* Appearance Settings */}
                        {activeTab === 'appearance' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Appearance Settings</h2>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Primary Color
                                        </label>
                                        <div className="flex gap-2">
                                            <input
                                                type="color"
                                                value={settings.primaryColor}
                                                onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                                                className="w-12 h-12 rounded-lg cursor-pointer"
                                            />
                                            <input
                                                type="text"
                                                value={settings.primaryColor}
                                                onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                                                className="flex-1 px-4 py-3 rounded-lg border border-gray-200"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Accent Color
                                        </label>
                                        <div className="flex gap-2">
                                            <input
                                                type="color"
                                                value={settings.accentColor}
                                                onChange={(e) => setSettings({ ...settings, accentColor: e.target.value })}
                                                className="w-12 h-12 rounded-lg cursor-pointer"
                                            />
                                            <input
                                                type="text"
                                                value={settings.accentColor}
                                                onChange={(e) => setSettings({ ...settings, accentColor: e.target.value })}
                                                className="flex-1 px-4 py-3 rounded-lg border border-gray-200"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Database Settings */}
                        {activeTab === 'database' && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Database Settings</h2>

                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <h3 className="font-medium text-blue-800 mb-2">Database Connection</h3>
                                    <p className="text-sm text-blue-700 mb-4">
                                        Configure your database connection in the .env file
                                    </p>
                                    <code className="block bg-blue-100 p-3 rounded text-sm text-blue-900">
                                        DATABASE_URL=postgresql://user:password@localhost:5432/manualshub
                                    </code>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">Current Status</h3>
                                    <p className="text-sm text-gray-600">
                                        Using mock data (database not configured)
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Save Button */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                            {saved && (
                                <span className="text-green-600 font-medium">✓ Settings saved successfully!</span>
                            )}
                            <button onClick={handleSave} className="btn-primary ml-auto">
                                <Save className="w-5 h-5" />
                                Save Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
