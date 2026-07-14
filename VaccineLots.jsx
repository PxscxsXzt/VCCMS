import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Printer, Eye, ShieldCheck } from 'lucide-react';
import { mockLots } from './Dashboard';

const VaccineLots = () => {
  const location = useLocation();
  // รับค่าชื่อวัคซีนจาก state ที่ส่งมาจากคลังหลัก/รอง
  const stateVaccineName = location.state?.vaccineName || 'bOPV';
  
  // กรอง Lot ทั้งหมดของวัคซีนตัวนี้
  const vaccineLots = mockLots.filter(
    (lot) => lot.vaccine.toLowerCase() === stateVaccineName.toLowerCase()
  );

  const firstLot = vaccineLots[0] || {
    id: 'N/A',
    vaccine: stateVaccineName,
    manufacturer: 'N/A',
    qty: 0,
    requiredTemp: '2°C to 8°C',
    status: 'Normal',
    statusType: 'success'
  };

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh', color: '#0F172A', padding: '1.5rem' }}>
      
      {/* Restored Main Topbar Layout */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>Vaccine Cold Chain</h2>
          <p style={{ fontSize: '0.85rem', color: '#64748B', margin: '2px 0 0 0' }}>Status: Active & Secure</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
            👤
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>Administrator</p>
            <p style={{ fontSize: '0.75rem', color: '#64748B', margin: 0 }}>Role: Manager</p>
          </div>
        </div>
      </div>

      {/* Back Button -> Go back to main Inventory (/inventory) */}
      <Link to="/inventory" style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        background: 'white', 
        border: '1px solid #E2E8F0', 
        padding: '0.6rem 1.2rem', 
        borderRadius: '8px', 
        cursor: 'pointer', 
        marginBottom: '2rem',
        textDecoration: 'none',
        color: '#0F172A',
        fontWeight: 600,
        fontSize: '0.9rem',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
      }}>
        <ArrowLeft size={16} /> Back to Inventory
      </Link>

      {/* Grid Content Layout matching image 3 layout exactly */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        {/* Left Column (LOT DETAILED SUMMARY) */}
        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>LOT DETAILED SUMMARY</span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '6px 0 0 0', color: '#0F172A' }}>{firstLot.id}</h3>
          </div>

          {/* Info Card */}
          <div style={{ border: '1px solid #F1F5F9', background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
              <span style={{ color: '#64748B' }}>Vaccine:</span>
              <span style={{ fontWeight: 700, color: '#0F172A' }}>{firstLot.vaccine}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
              <span style={{ color: '#64748B' }}>Manufacturer:</span>
              <span style={{ fontWeight: 700, color: '#0F172A' }}>{firstLot.manufacturer}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
              <span style={{ color: '#64748B' }}>Batch Quantity:</span>
              <span style={{ fontWeight: 700, color: '#0F172A' }}>
                {vaccineLots.reduce((sum, lot) => sum + lot.qty, 0).toLocaleString()} doses
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
              <span style={{ color: '#64748B' }}>Temp Limits:</span>
              <span style={{ fontWeight: 700, color: '#2563EB' }}>{firstLot.requiredTemp}</span>
            </div>
          </div>

          {/* Status Box */}
          <div style={{ 
            border: '1px solid #10B981', 
            background: '#ECFDF5', 
            borderRadius: '12px', 
            padding: '1.25rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem' 
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#065F46', fontWeight: 700 }}>System: Normal</h4>
              <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#047857' }}>Chain integrity verified.</p>
            </div>
          </div>
        </div>

        {/* Right Column (Lot List Table / Telemetry Log style) */}
        <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: '#0F172A' }}>รายการ Lot วัคซีน</h3>
            <p style={{ fontSize: '0.875rem', color: '#64748B', margin: '4px 0 0 0' }}>ข้อมูลวันผลิต วันหมดอายุ และตัวเลือกการพิมพ์ของแต่ละ Lot</p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <th style={{ padding: '0.85rem', fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>ชื่อ LOT</th>
                  <th style={{ padding: '0.85rem', fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>วันผลิต (MFG)</th>
                  <th style={{ padding: '0.85rem', fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>วันหมดอายุ (EXP)</th>
                  <th style={{ padding: '0.85rem', fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', textAlign: 'center' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {vaccineLots.length > 0 ? (
                  vaccineLots.map((lot) => (
                    <tr key={lot.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '1.1rem 0.85rem', fontSize: '0.9rem', fontWeight: 700, color: '#2563EB' }}>{lot.id}</td>
                      <td style={{ padding: '1.1rem 0.85rem', fontSize: '0.9rem', color: '#475569' }}>{lot.mfgDate}</td>
                      <td style={{ padding: '1.1rem 0.85rem', fontSize: '0.9rem', color: '#475569' }}>{lot.expDate}</td>
                      <td style={{ padding: '1.1rem 0.85rem' }}>
                        <div className="flex" style={{ justifyContent: 'center', gap: '0.8rem' }}>
                          {/* Print Barcode */}
                          <Link to={`/print-barcodes/${lot.id}`} className="btn-icon" title="พิมพ์ Barcode" style={{ padding: '6px', background: '#F1F5F9', borderRadius: '6px', color: '#475569' }}>
                            <Printer size={16} />
                          </Link>
                          {/* Eye -> Navigate to /inventory/stock/detail */}
                          <Link to="/inventory/stock/detail" state={{ lotId: lot.id }} className="btn-icon" title="ดูรายละเอียดทั้งหมด" style={{ padding: '6px', background: '#EFF6FF', borderRadius: '6px', color: '#2563EB' }}>
                            <Eye size={16} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '3rem', color: '#64748B' }}>
                      ไม่พบข้อมูล Lot สำหรับวัคซีนนี้
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VaccineLots;
