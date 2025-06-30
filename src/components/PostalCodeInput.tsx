
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

  const handleConfirm = () => {
    if (postalCode.trim()) {
      onPostalCodeConfirmed(postalCode.trim());
      setIsEditing(false);
    }
  };

  const handleChange = () => {
    setIsEditing(true);
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
        <div className="flex gap-2">
          <Input
            placeholder="e.g. SW1A 1AA"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleConfirm} disabled={!postalCode.trim()}>
            Confirm
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostalCodeInput;
