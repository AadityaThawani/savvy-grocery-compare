import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PostalCodeInputProps {
  onPostalCodeConfirmed: (postalCode: string) => void;
  confirmedPostalCode: string | null;
}

const PostalCodeInput = ({ onPostalCodeConfirmed, confirmedPostalCode }: PostalCodeInputProps) => {
  const [postalCode, setPostalCode] = useState('');
  const [isEditing, setIsEditing] = useState(!confirmedPostalCode);
  const [error, setError] = useState('');

  // UK postal code validation regex
  const ukPostcodeRegex = /^[A-Z]{1,2}[0-9][0-9A-Z]? ?[0-9][A-Z]{2}$/i;

  const validatePostalCode = (code: string): boolean => {
    return ukPostcodeRegex.test(code.trim());
  };

  const handleConfirm = () => {
    const trimmedCode = postalCode.trim().toUpperCase();
    if (!trimmedCode) {
      setError('Please enter a postal code');
      return;
    }
    
    if (!validatePostalCode(trimmedCode)) {
      setError('Please enter a valid UK postal code (e.g., SW1A 1AA)');
      return;
    }

    setError('');
    onPostalCodeConfirmed(trimmedCode);
    setIsEditing(false);
  };

  const handleChange = () => {
    setIsEditing(true);
    setError('');
  };

  if (confirmedPostalCode && !isEditing) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-muted-foreground">Postal Code:</span>
              <span className="ml-2 font-medium">{confirmedPostalCode}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleChange}>
              Change
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter UK Postal Code</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder="e.g. SW1A 1AA"
              value={postalCode}
              onChange={(e) => {
                setPostalCode(e.target.value);
                if (error) setError(''); // Clear error when user starts typing
              }}
              className={`flex-1 ${error ? 'border-destructive' : ''}`}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleConfirm();
                }
              }}
            />
            <Button onClick={handleConfirm} disabled={!postalCode.trim()}>
              Confirm
            </Button>
          </div>
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PostalCodeInput;